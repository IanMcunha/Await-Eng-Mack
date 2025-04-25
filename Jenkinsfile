// pipeline {
//     agent any
//     tools { nodejs "NodeJs" }
//     environment {
//         PORT = "3000"
//     }
//     stages {
//         stage("Build") {
//             steps {
//                 nodejs("NodeJs") {
//                     // usa npm ci pra garantir install limpo
//                     sh 'npm ci'
//                     // build gera a pasta .next
//                     sh 'npm run build'
//                 }
//             }
//         }
//         stage("Start") {
//             steps {
//                 nodejs("NodeJs") {
//                     // força o Next a escutar em 0.0.0.0 na porta 3000
//                     sh 'npm run start -- -p $PORT -H 0.0.0.0'
//                 }
//                 echo "App started successfully on port $PORT"
//             }
//         }
//     }
// }

pipeline {
  stages {
    stage('Install') {
      steps {
        sh 'npm ci'
      }
    }
    stage('Type Check') {
      steps {
        // opcional: roda o compilador para checar tipos sem gerar saída
        sh 'npx tsc --noEmit'
      }
    }
    stage('Lint & Format') {
      steps {
        // lint via Biome
        sh 'npx biome check'
        // formatação opcional
        sh 'npx biome format --write'
      }
    }
    stage('Build') {
      steps {
        sh 'npm run build'
      }
    }
  }
}
