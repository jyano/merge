$l('models')

models={}


models.Topic = mongoose.model('Topic', {topic: String, score: {type:Number,default:1}, views:{type:Number,default:1} })

models.Message = mongoose.model('Message', {message: String, topic:String, score: {type:Number,default:1}})



