import {defineBackend} from '@aws-amplify/backend'

const backend = defineBackend({})

backend.addOutput({
    storage: {
        aws_region: 'us-east-1',
        bucket_name: 'globallinkplus-dev'
    }
})