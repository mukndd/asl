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
    }
}
