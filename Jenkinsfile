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
        stage("Build and push Docker image") {
            steps {
                script {
                    echo "Building and pushing Docker image..."
                    withCredentials([usernamePassword(credentialsId: 'docker', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                        def docker_image
                        docker.withRegistry('', 'docker') {
                            docker_image = docker.build("${DOCKER_USER}/${APP_NAME}")
                            docker_image.push("${IMAGE_TAG}")
                            docker_image.push('latest')
                        }
                    }
                }
            }
        }
        stage("Docker logout") {
            steps {
                script {
                    echo "Logging out from Docker..."
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
            echo 'Pipeline completed successfully.'
        }
        failure {
            echo 'Pipeline failed.'
        }
    }
}
