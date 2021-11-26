def projectName='capstoneProject'
def version = "0.0${currentBuild.number}"
def dockerImageTag = "${projectName}:${version}"

pipeline {
agent any

stages {
        stage('Build Docker Image'){
            steps {
                sh "docker build -t ${dockerImageTag}"
            }
        }
        stage('Deploy container to openshift'){
            steps {
                sh "oc login https://localhost:8443 --username admin --password admin --insecure-skip-tls-verify-true"
                sh "oc project ${projectName} || oc -new-project ${projectName}"
                sh "oc delete all --selector app=${projectName} || echo 'uable to delete all previous openshift resources'"
                sh "oc new-app ${dockerImageTag} -l version=${version}"
                sh "oc expose svc/${projectName}"
            }
        }
    }
}