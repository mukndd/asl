pipeline {
    agent any
    tools {
        jdk 'openJdk'
        maven 'M3'
    }
    environment {
        APP_NAME = "ashritha"
        RELEASE = "1.0.0"
        DOCKER_USER = "ashrithasdocker"
        IMAGE_NAME = "${DOCKER_USER}/${APP_NAME}"
        IMAGE_TAG = "${RELEASE}-${BUILD_NUMBER}"
        DOCKERHUB_CREDENTIALS = credentials('docker')
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
                git branch: 'main', credentialsId: 'github', url: 'https://github.com/mgkagithub/asl.git'
            }
        }

        stage("Build Application") {
            steps {
                sh "mvn clean package"
            }
        }

        stage("Test") {
            steps {
                sh "mvn test"
            }
        }

        stage("Build and Push Docker Image") {
            steps {
                script {
                    docker.withRegistry('', 'DOCKERHUB_CREDENTIALS') {
                        def dockerImage = docker.build("${IMAGE_NAME}:${IMAGE_TAG}")
                        dockerImage.push()
                        dockerImage.push('latest')
                    }
                }
            }
        }

        stage("Docker Logout") {
            steps {
                script {
                    sh 'docker logout'
                }
            }
        }
    }
}
