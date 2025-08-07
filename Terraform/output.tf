output "public_subnet_ids" {
  value = aws_subnet.Terra-Public-Subnets[*].id
}


