pipeline {
    agent any

    environment {
        DOCKER_IMAGE_OWNER = 'dangdang42'
        DOCKER_BUILD_TAG = "v${env.BUILD_NUMBER}"
        DOCKER_PWD = credentials('dockerhub')
        // GIT_CREDENTIALS = credentials('github_access_token')
        REPO_URL = 'gongbu22/MyPortfolio-CD.git'
        COMMIT_MESSAGE = 'Update README.md via Jenkins Pipeline'
        VITE_FASTAPI_URL = credentials('VITE_FASTAPI_URL')
        VITE_CHATBOT_URL = credentials('VITE_CHATBOT_URL')
    }

    stages {
        stage('clone from SCM') {
            steps {
                sh '''
                rm -rf MyPortfolio-frontend
                git clone https://github.com/gongbu22/MyPortfolio-frontend.git
                '''
            }
        }

        stage('Create .env File') {
            steps {
                dir('MyPortfolio-frontend') {
                    script {
                        writeFile file: '.env', text: """
                        VITE_FASTAPI_URL=${VITE_FASTAPI_URL}
                        VITE_CHATBOT_URL=${VITE_CHATBOT_URL}
                        """.stripIndent()
                    }
                }
            }
        }

        // stage('Create .env File') {
        //     steps {
        //         dir('MyPortfolio-frontend') {
        //             sh """
        //             echo 'REACT_APP_FASTAPI_URL=${VITE_FASTAPI_URL}' > .env
        //             echo 'REACT_APP_CHATBOT_URL=${VITE_CHATBOT_URL}' >> .env
        //             """
        //         }
        //     }
        // }  
        // stage('Set Dockerfile Permissions') {
        //     steps {
        //         dir('MyPortfolio-frontend') {
        //             sh """
        //             chmod 644 ./nginx-Dockerfile
        //             chmod 644 ./nodejs-Dockerfile
        //             """
        //         }
        //     }
        // }  

        stage('Docker Image Building') {
            steps {
                dir('MyPortfolio-frontend') {
                    // sh """
                    // docker build -t ${DOCKER_IMAGE_OWNER}/myportfolio-nodejs:latest -t ${DOCKER_IMAGE_OWNER}/myportfolio-nodejs:${DOCKER_BUILD_TAG} -f nodejs-Dockerfile .
                    // docker build -t ${DOCKER_IMAGE_OWNER}/myportfolio-nginx:latest -t ${DOCKER_IMAGE_OWNER}/myportfolio-nginx:${DOCKER_BUILD_TAG} -f nginx-Dockerfile . 
                    // """
                    sh """docker build -t ${DOCKER_IMAGE_OWNER}/yujinfolio-front:latest -t ${DOCKER_IMAGE_OWNER}/yujinfolio-front:${DOCKER_BUILD_TAG} -f Dockerfile ."""
                }
            }
        }

        stage('Docker Login') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub', usernameVariable: 'DOCKER_USR', passwordVariable: 'DOCKER_PWD')]) {
                sh "echo $DOCKER_PWD | docker login -u $DOCKER_USR --password-stdin"}
            }
        }

        stage('Docker Image pushing') {
            steps {
                // sh """
                // docker push ${DOCKER_IMAGE_OWNER}/myportfolio-nodejs:${DOCKER_BUILD_TAG}
                // docker push ${DOCKER_IMAGE_OWNER}/myportfolio-nodejs:latest
                // docker push ${DOCKER_IMAGE_OWNER}/myportfolio-nginx:${DOCKER_BUILD_TAG}
                // docker push ${DOCKER_IMAGE_OWNER}/myportfolio-nginx:latest
                // """
                sh """
                docker push ${DOCKER_IMAGE_OWNER}/yujinfolio-front:${DOCKER_BUILD_TAG}
                docker push ${DOCKER_IMAGE_OWNER}/yujinfolio-front:latest
                """
            }
        }

        stage('Docker Logout') {
            steps {
                sh """
                docker logout
                """
            }
        }

        // stage('Clone Repository') {
        //     steps {
        //         sh """
        //         rm -rf MyPortfolio-CD
        //         git clone https://github.com/${REPO_URL}
        //         """
        //     }
        // }

        // stage('Modify README.md') {
        //     steps {
        //         sh """
        //             cd MyPortfolio-CD
        //             echo "# Updated README" > README.md
        //             echo "This README was updated by Jenkins Build #${DOCKER_BUILD_TAG} on \$(date)" >> README.md
        //         """
        //     }
        // }

        // stage('Update values.yaml') {
        //     steps {
        //         sh """
        //            cd MyPortfolio-CD
        //            sed -i 's|FRONTEND_IMG: .*|FRONTEND_IMG: ${DOCKER_IMAGE_OWNER}/myportfolio-frontend:${DOCKER_BUILD_TAG}|' values.yaml
        //         """
        //     }
        // }

        // stage('Commit Changes') {
        //     steps {
        //         dir('MyPortfolio-CD') {
        //         sh """
        //             git config user.name "gongbu22"
        //             git config user.email "pyujin0711@naver.com"
        //             git add README.md MyPortfolio-CD/values.yaml
        //             git commit -m "${COMMIT_MESSAGE}"
        //         """
        //         }
        //     }
        // }

        // stage('Push Changes') {
        //     steps {
        //         dir('MyPortfolio-CD') {
        //         sh """
        //             git push https://${GIT_CREDENTIALS_USR}:${GIT_CREDENTIALS_PSW}@github.com/${REPO_URL} main
        //         """
        //         }
        //     }
        // }
    }
    
}