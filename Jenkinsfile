pipeline {
    agent any

    environment {
        DOCKER_IMAGE_OWNER = 'dangdang42'
        // DOCKER_BUILD_TAG = "v${env.BUILD_NUMBER}"
        DOCKER_PWD = credentials('dockerhub')
        // GIT_CREDENTIALS = credentials('github_access')
        // REPO_URL = 'gongbu22/MyPortfolio-CD.git'
        // COMMIT_MESSAGE = 'Update README.md via Jenkins Pipeline'
    }

    stage {
        stage('clone from SCM') {
            steps {
                sh '''
                rm -rf MyPortfolio-frontend
                git clone https://github.com/gongbu22/MyPortfolio-frontend.git
                '''
            }
        }
    

        stage('Docker Image Building') {
            steps {
                dir('MyPortfolio-frontend') {
                    sh '''
                    docker build -t ${DOCKER_IMAGE_OWNER}/MyPortfolio-frontend:latest
                    docker tag ${DOCKER_IMAGE_OWNER}/MyPortfolio-frontend:latest
                    '''
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
                    sh '''
                    docker push ${DOCKER_IMAGE_OWNER}/MyPortfolio-frontend:latest
                    '''
                }
            }

        stage('Docker Logout') {
            steps {
                sh '''
                docker logout
                '''
            }
        }

        // stage('Clone Repository') {
        //     steps {
        //         sh '''
        //         rm -rf MyPortfolio-CD
        //         git clone https://github.com/${REPO_URL}
        //         '''
        //     }
        // }

        // stage('Modify README.md') {
        //     steps {
        //         sh """
        //             cd MyPortfolio-CD
        //             echo "# Updated README" > README.md
        //             echo "This README was updated by Jenkins Build #${env.BUILD_NUMBER} on \$(date)" >> README.md
        //         """
        //     }
        // }

        // stage('Commit Changes') {
        //     steps {
        //         dir('MyPortfolio-CD') {
        //         sh '''
        //             git config user.name "gongbu22"
        //             git config user.email "pyujin0711@naver.com"
        //             git add README.md
        //             git commit -m "${COMMIT_MESSAGE}"
        //         '''
        //         }
        //     }
        // }

        // stage('Push Changes') {
        //     steps {
        //         dir('MyPortfolio-CD') {
        //         sh '''
        //             git push https://${GIT_CREDENTIALS_USR}:${GIT_CREDENTIALS_PSW}@github.com/${REPO_URL} main
        //         '''
        //         }
        //     }
        // }
    }
    
}