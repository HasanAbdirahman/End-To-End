output "public_subnet_ids" {
  value = aws_subnet.Terra-Public-Subnets[*].id
}

output "cluster_name" {
  value = module.eks.name
}
