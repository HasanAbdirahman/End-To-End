module "eks" {
  source  = "terraform-aws-modules/eks/aws"
  version = "21.0.0"
  
  name               = "terra-eks-cluster"
  kubernetes_version = "1.30"

  # Network configuration
  vpc_id     = aws_vpc.Terra-VPC.id
  subnet_ids = aws_subnet.Terra-Public-Subnets[*].id

  # Use your custom IAM role for the EKS control plane
  create_iam_role = false
  iam_role_arn    = aws_iam_role.eks_cluster_role.arn

  # EKS managed node groups
  eks_managed_node_groups = {
    default = {
      instance_types = ["t3.medium"]
      min_size       = 1
      max_size       = 3
      desired_size   = 1
      iam_role_arn   = aws_iam_role.eks_node_group_role.arn
    }
  }

  enable_irsa = false

  tags = {
    Environment = local.Environment
    Project     = local.Project
    Owner       = local.Owner
    Terraform   = local.terraform
  }
}
