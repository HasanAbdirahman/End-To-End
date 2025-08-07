## 🚀 End-to-End AWS Infrastructure Deployment with CI/CD

This project automates the full deployment lifecycle of a containerized application using:

* **Terraform** for AWS infrastructure provisioning
* **Amazon EKS (Kubernetes)** for orchestration
* **Docker & Docker Hub** for container builds
* **GitHub Actions** for CI/CD pipelines

Everything from infrastructure to app deployment runs hands-free via GitHub.

---

### 📁 Project Structure

```
End-To-End/
├── .github/workflows/         # GitHub Actions for CI/CD
│   ├── app-Terra-Create.yaml  # Full infra + app deployment
│   └── terraform-destroy.yaml # Manual destroy workflow
├── Terraform/                 # AWS infra: EKS, IAM, VPC
├── Kubernetes/                # Kubernetes app manifests
├── frontend/                  # Frontend application (React or similar)
└── .gitignore
```

---

### 🧰 Tech Stack

* **AWS** – VPC, EKS, IAM
* **Terraform** – Infrastructure as Code
* **Kubernetes** – Container orchestration
* **Docker** – Container image builds
* **GitHub Actions** – CI/CD automation
* **Docker Hub** – Image registry

---

### 🔐 GitHub Secrets Required

Your GitHub repository should include the following secrets under **Settings > Secrets > Actions**:

| Secret Name             | Description                |
| ----------------------- | -------------------------- |
| `AWS_ACCESS_KEY_ID`     | IAM user access key        |
| `AWS_SECRET_ACCESS_KEY` | IAM user secret key        |
| `DOCKER_USERNAME`       | Docker Hub username        |
| `DOCKER_PASSWORD`       | Docker Hub password or PAT |

---

### ⚙️ How It Works

#### ✅ `app-Terra-Create.yaml` – Auto Infrastructure & App Deployment

**Triggered on:** Every push to the `main` branch
**Workflow includes:**

1. **Terraform provisioning** (via `Terraform/`)

   * EKS cluster
   * VPC, Subnets, IAM Roles
2. **Docker image build & push** from `frontend/` to Docker Hub
3. **App deployment to EKS** using `kubectl` and `Kubernetes/` manifests

#### ⚠️ `terraform-destroy.yaml` – Manual Infrastructure Teardown

**Triggered via:** GitHub UI → Actions → *Run workflow*
**Workflow includes:**

* `terraform destroy` to tear down all infrastructure

---

### 🛠️ Manual Setup (Optional)

#### 1️⃣ Clone the Repo

```bash
git clone https://github.com/HasanAbdirahman/End-To-End.git
cd End-To-End
```

#### 2️⃣ Manually Provision Infrastructure

```bash
cd Terraform
terraform init
terraform apply
```

#### 3️⃣ Build & Push Docker Image (Optional)

```bash
cd frontend
docker build -t <dockerhub-username>/myapp:latest .
docker login
docker push <dockerhub-username>/myapp:latest
```

#### 4️⃣ Deploy to Kubernetes

```bash
kubectl apply -f Kubernetes/
```

---

### 🌍 Frontend

To run the app locally:

```bash
cd frontend
npm install
npm start
```

---

### 📤 Terraform Outputs

After `terraform apply`, you’ll get:

* Cluster name
* VPC ID
* Subnet IDs
* Node group name

These are defined in `output.tf`.

---

### 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch
3. Open a pull request with clear description

---

### 📄 License

This project is licensed under the MIT License.
