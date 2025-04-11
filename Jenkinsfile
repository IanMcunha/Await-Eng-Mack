pipeline {
    agent any
    tools { nodejs "NodeJs" }
    environment {
        PORT = "3000"
    }
    stages {
        stage("Build") {
            steps {
                nodejs("NodeJs") {
                    // usa npm ci pra garantir install limpo
                    sh 'npm ci'
                    // build gera a pasta .next
                    sh 'npm run build'
                }
            }
        }
        stage("Start") {
            steps {
                nodejs("NodeJs") {
                    // força o Next a escutar em 0.0.0.0 na porta 3000
                    sh 'npm run start -- -p $PORT -H 0.0.0.0'
                }
                echo "App started successfully on port $PORT"
            }
        }
    }
}
