var dataCustomer = new Array()
var dataRoomNumber = new Array()
var dataRoomType = new Array()


const ClassRoomType = function ({
    id,
    name,
    price
}) {
    this.id = id
    this.name = name
    this.price = price
}

ClassRoomType.prototype.getClassRoomType = function () {
    return dataRoomType[
        this.id,
        this.name,
        this.price
    ]
}
let roomType = [
    {id:'1', name: 'Standard', price:'600'},
    {id:'2', name: 'Superior', price:'1,000'},
    {id:'3', name: 'Deluxe', price:'1,500'},
    {id:'4', name: 'Suite', price:'800'}
]
roomType.forEach(data => {
    dataRoomType.push(new ClassRoomType(data))
})

const ClassRoomNumber = function ({
    id,
    name,
    type,
    status
}) {
    this.id = id
    this.name = name
    this.type = type
    this.status = status
}

ClassRoomNumber.prototype.getClassRoomNumber = function () {
    return dataRoomNumber[
        this.id,
        this.name,
        this.type,
        this.status
    ]
}

let roomNumber = [
    {id:'1', name:'001', type:'Standard',status:'empty'},
    {id:'2', name:'002', type:'Standard',status:'empty'},
    {id:'3', name:'003', type:'Deluxe',status:'full'},
    {id:'4', name:'004', type:'Deluxe',status:'empty'},
    {id:'5', name:'005', type:'Suite',status:'full'},
    {id:'6', name:'006', type:'Suite',status:'full'},
    {id:'7', name:'007', type:'Superior',status:'full'},
    {id:'8', name:'008', type:'Superior',status:'empty'}
]
roomNumber.forEach(data => {
    dataRoomNumber.push(new ClassRoomNumber(data))
})

const BookingRoom = function ({
    id,
    name,
    lastName,
    age,
    living,
    dateStart,
    dateEnd
}) {
    this.id = id
    this.name = name
    this.lastName = lastName
    this.age = age
    this.living = living
    this.dateStart = dateStart
    this.dateEnd = dateEnd
}

BookingRoom.prototype.getBookingRoom = function () {
    return dataCustomer[
        this.id,
        this.name,
        this.lastName,
        this.age,
        this.living,
        this.dateStart,
        this.dateEnd
    ]
}

let customer = [
    {
        id: '1',
        name: 'Rem',
        lastName: 'natsuki',
        age: '28',
        living: '003',
        dateStart: '2021/09/22',
        dateEnd: '2021/09/26',
        phone:'0617970793'
    },
    {
        id: '2',
        name: 'Dark',
        lastName: 'light',
        age: '20',
        living: '005',
        dateStart: '2021/09/23',
        dateEnd: '2021/09/24',
        phone: '0817557456'
    },
    {
        id: '3',
        name: 'Arthuri',
        lastName: 'Moon',
        age: '52',
        living: '006',
        dateStart: '2021/09/24',
        dateEnd: '2021/09/30',
        phone: '0817793055'
    },
    {
        id: '4',
        name: 'Subaru',
        lastName: 'natsuki',
        age: '37',
        living: '007',
        dateStart: '2021/09/22',
        dateEnd: '2021/09/26',
        phone: '0811111111'
    },
]
customer.forEach(data =>{
    dataCustomer.push(new BookingRoom(data))
})

showRoomAll = () => {
    let data = dataRoomNumber.filter(
        (value) => {
            return value
    })
    return data
}


showRoomType = () => {
    let data = dataRoomType.map(
        (value) => {
        return value
    })
    return data
}

searchRoom = (name) => {
    let data = []
    roomNumber.filter((value) => {
        if (value.type === name) {
            data.push(value)
        } else if (value.status === name) {
            data.push(value)
        } else if (value.name === name) {
            data.push(value)
        } else if (name == '') {
            data.push(value)
        }
    })
    return data
}

searchCustomer = (name) => {
   let data = dataCustomer.filter((value) => {
        if (value.name === name) {
           return value
        } else if (value.lastName === name) {
            return value
        } else if (value.age === name) {
            return value
        } else if (value.living === name) {
            return value
        } else if (name == '') {
            return value
        }
    })
    return data
}

bookingRoom = (data) =>{
    dataCustomer.push(new BookingRoom(data))
    dataRoomNumber.filter(value =>{
        if(value.status === 'empty'){
            if (value.name === data.living){
                value.status = 'full'
            }
        }else{
            console.log('Is the room you choose to have been full');
            
        }
    })
}


module.exports = {
    showRoomAll: showRoomAll,
    showRoomType: showRoomType,
    searchRoom: searchRoom,
    searchCustomer: searchCustomer,
    bookingRoom: bookingRoom
}