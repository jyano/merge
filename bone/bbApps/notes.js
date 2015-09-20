server = {
    d:2,
    n:2,
    docs: {
        1: {text: 'this is a doc', id: 1}
    },
    notes:{
        1:{1:{text:'note'},2:{text:'another note'}}
    },
    get: {
        '/docs': function(q,p){
            var res = []
            for (var doc in docs){

                if (docs.hasOwnProperty(doc)) { res.push(docs[doc]) }
            }
            p.json(res)
        },
        '/docs/:did/notes':function(q,p){
            var res=[], n=notes[q.params.id]
            for(var note in n){
                if(n.hasOwnProperty(note)){ res.push(n[notes]) }
            }
        }
    },
    post: {
        '/docs': function(q,p){
            var doc = q.body
            doc.id = d++
            docs.doc.id = doc
            p.json(doc)
        },
        '/docs/:did/notes':function(q,p){
            var note = q.body, id = q.params.id
            note.id= n++
            if(!notes[id]){notes[id]={} }
            notes[id][notes.id]=note
            p.json(note)
        }
    },
    put: {
        'docs/:id': function(q,p){
            docs[q.params.id] = q.body
            p.json(q.body)
        },
        'docs/:did/notes:nid': function(q,p){
            notes[q.params.id][q.params.nid] = q.body
            p.json(q.body)
        }
    }
}


Note = Bb.M.x({


})


Notes= Bb.C.x({

    m: Note,

    i:function(mds, op){

        this.doc= op.doc


    },

    u: function(){
        return this.doc.url() + '/notes'
    }


})
Doc= Bb.M.x({

    i: function(op){
        this.notes = new Notes([], {doc:this})
    },



    addNote: function(tx){

        this.notes.create({
            text: tx
        })
    }



})
Docs=Bb.C.x({
    m:Doc, u:'/documents',

    i:function(){

        this.on('reset', this.getNotes, this)
    },

    getNotes: function(){
        this.each(function(doc){
            doc.notes = new Notes([], {doc:doc})
            doc.notes.fetch()
        })

    }
})

ds = new Docs()
ds.fetch()