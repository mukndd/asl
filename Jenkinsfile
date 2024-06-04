pipeline {
    agent any
    tools {
        jdk 'openJdk'
        maven 'M3'
    }
    environment {
        APP_NAME = "ashritha"
        RELEASE = "1.0.0"
        DOCKERHUB_CREDENTIALS = 'docker' 
        DOCKER_CREDENTIALS_ID = 'docker'
        DOCKER_REPO = 'ashrithasdocker/ashritha'
        DOCKER_TAG = '1.0.0-58'
        DOCKER_IMAGE = "${DOCKER_REPO}:${DOCKER_TAG}"
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
         stage('Build') {
            steps {
                script {
                    docker.build(env.DOCKER_IMAGE)
                }
            }
        }
        
        stage('Push') {
            steps {
                script {
                    docker.withRegistry('https://index.docker.io/v1/', env.DOCKER_CREDENTIALS_ID) {
                        docker.image(env.DOCKER_IMAGE).push()
                    }
                }
            }
        }
           
        stage("Deploy to AWS EC2") {
            steps {
                script {
                    echo "Connecting to EC2 instance and deploying application..."
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
        always {
            echo 'Pipeline execution finished.'
        }
        success {
            echo 'Build and deployment successful!'
        }
        failure {
            echo 'Build or deployment failed!'
        }
    }
}
