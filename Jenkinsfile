pipeline {
    agent any
    tools {
        jdk 'openJdk'
        maven 'M3'
    }
    environment {
        APP_NAME = "SignEz"
        RELEASE = "1.0.0"
        DOCKER_USER = "ashrithasdocker"
        IMAGE_NAME = "${DOCKER_USER}/${APP_NAME}"
        IMAGE_TAG = "${RELEASE}-${BUILD_NUMBER}"
    }

    triggers {
        pollSCM('H/2 * * * *')
    }

    stages {
        stage("Clean Workspace") {
            steps {
                echo "Cleaning workspace..."
                cleanWs()
            }
        }

        stage("Checkout from SCM") {
            steps {
                echo "Checking out code from SCM..."
                echo "Branch: main"
                echo "Repo URL: https://github.com/mgkagithub/asl.git"
                git branch: 'main', credentialsId: 'github', url: 'https://github.com/mgkagithub/asl.git'
            }
        }

        stage("Build Application") {
            steps {
                echo "Building application..."
                sh "mvn clean package"
            }
        }

        stage("Test") {
            steps {
                echo "Running tests..."
                sh "mvn test"
            }
        }

        stage("Build and Push Docker Image") {
            steps {
                script {
                    echo "Building Docker image..."
                    echo "IMAGE_NAME: ${IMAGE_NAME}"
                    echo "IMAGE_TAG: ${IMAGE_TAG}"
                    withCredentials([usernamePassword(credentialsId: 'docker', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
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

        stage("Docker Logout") {
            steps {
                echo "Logging out from Docker..."
                script {
                    sh 'docker logout'
                }
            }
        }
    }
}
