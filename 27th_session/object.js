

// console.log(object.name)
// console.log(object.live())

// let obj_properties = Object.keys(myObject)
// console.log(obj_properties)


// let obj_values = Object.values(myObject)
// console.log(obj_values)

// let obj_entries = Object.entries(myObject)
// console.log(obj_entries)

// console.log(myObject.hasOwnProperty('surname'))

// let a =1;
// let b = a
// b = 99
let myObject = {
    name: 'Tech',
    studying: 'yes',
    live: function (){
        return 'We are in a session'
    },
    func: function(){
        console.log(this.name)
    }
}

let new_obj = {
    name:'Pathshala',
    new_func: function(){
        console.log(this)
        function inner(){
            console.log(this)
        }
        inner()
    }
}

new_obj.new_func()
// let new_obj = myObject
// new_obj.name = 'Techpathshala'
// console.log(myObject)

// myObject.func()

// new_obj.new_func()


//Name, username, submit -> 



