pipeline {
    agent any
    tools {
        jdk 'openJdk'
        maven 'M3'
    }
    environment {
        APP_NAME = "ashritha"
        RELEASE = "1.0.0"
        IMAGE_NAME = "${DOCKER_USER}/${APP_NAME}"
        IMAGE_TAG = "${RELEASE}-${BUILD_NUMBER}"
    }
    triggers {
        pollSCM('H/2 * * * *')
    }
    stages {
        stage("Clean Workspace") {
            steps {
                cleanWs()
            }
        }
        stage("Checkout from SCM") {
            steps {
                script {
                    echo "Checking out code from SCM..."
                }
                git branch: 'main', credentialsId: 'github', url: 'https://github.com/mgkagithub/asl.git'
            }
        }
        stage("Build Application") {
            steps {
                script {
                    echo "Building the application..."
                }
                sh "mvn clean package"
            }
        }
        stage("Test") {
            steps {
                script {
                    echo "Running tests..."
                }
                sh "mvn test"
            }
        }
                stage("Build and Push Docker Image") {
            steps {
                script {
                    echo "Building Docker image..."
                    echo "IMAGE_NAME: ${IMAGE_NAME}"
                    echo "IMAGE_TAG: ${IMAGE_TAG}"
                    withCredentials([usernamePassword(credentialsId: 'dockerhub', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                        docker.withRegistry('', 'docker') {
                            def dockerImage = docker.build("${IMAGE_NAME}:${IMAGE_TAG}")
                            echo "Pushing Docker image with tag ${IMAGE_TAG}..."
                            dockerImage.push()
                            echo "Pushing Docker image with tag latest..."
                            dockerImage.push('latest')
                        }
                    }
                }
            }
        }

        stage("Deploy to AWS EC2") {
            steps {
                script {
                    echo "Connecting to EC2 instance and deploying application..."
                    sshagent(['your-ssh-credentials-id']) {
                        sh """
                        ssh -o StrictHostKeyChecking=no ec2-user@13.232.151.234 << EOF
                            docker pull ${IMAGE_NAME}:${IMAGE_TAG}
                            docker stop ${APP_NAME} || true
                            docker rm ${APP_NAME} || true
                            docker run -d --name ${APP_NAME} -p 80:8080 ${IMAGE_NAME}:${IMAGE_TAG}
                        EOF
                        """
                    }
                }
            }
        }

        stage("Docker Logout") {
            steps {
                echo "Logging out from Docker..."
                script {
                    sh 'docker logout'
                }
            }
        }
    }
    
    post {
        success {
            echo 'Build and deployment successful!'
        }
        failure {
            echo 'Build or deployment failed!'
        }
    }
      
    }
    post {
        always {
            echo 'Pipeline execution finished.'
        }
        success {
            echo 'Pipeline completed successfully.'
        }
        failure {
            echo 'Pipeline failed.'
        }
    }
}
