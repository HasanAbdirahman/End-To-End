variable subnets_counts {
    type: number
    default: 2
}

variables cidr_block { 
    type: list(string)
    default: ["10.0.1.0/24", "10.0.2.0/24"]
}