resource "aws_vpc" "Terra-VPC" {
  cidr_block = "10.0.0.0/16"

  tags = {
    Name = "Terra-VPC"
  }
}

resource "aws_subnet" "Terra-Public-Subnets" {
  count             = var.subnet_count
  vpc_id            = aws_vpc.Terra-VPC.id
  cidr_block        = var.subnet_cidrs[count.index]
  availability_zone = data.aws_availability_zones.available.names[count.index]

  tags = {
    Name = "Terra-Public-Subnet-${count.index + 1}"
  }
}

resource "aws_internet_gateway" "Terra-IGW" {
  vpc_id = aws_vpc.Terra-VPC.id

  tags = {
    Name = "Terra-IGW"
  }
}

resource "aws_route_table" "Terra-RT" {
  vpc_id = aws_vpc.Terra-VPC.id

  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.Terra-IGW.id
  }

  tags = {
    Name = "Terra-RT"
  }
}

resource "aws_route_table_association" "Terra-RTA" {
  count          = var.subnet_count
  subnet_id      = aws_subnet.Terra-Public-Subnets[count.index].id
  route_table_id = aws_route_table.Terra-RT.id
}
