output "public_subnet_ids" {
  value = aws_subnet.Terra-Public-Subnets[*].id
}

output "kubeconfig_command" {
  value = module.eks.kubeconfig_filename
}

output "cluster_endpoint" {
  value = module.eks.cluster_endpoint
}

output "cluster_name" {
  value = module.eks.name
}
