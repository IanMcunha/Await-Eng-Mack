pipeline{
    agent any
    tools {nodejs "NodeJs"}
    stages{
        stage("Build"){
            steps{
                nodejs("NodeJs") {
                    sh 'npm install'
                    sh 'npm build'
                }
            }
        }
        stage("Start"){
            steps{
                nodejs("NodeJs") {
                    sh 'npm start'
                }
                echo "App started successfully"
            }
        }
    }
}