const Button = ({type = '', fill = true, title = '', disable = false}) => {
    var bg = ''
    var outline = ''
    var text = 'text-white'

    switch(type){
        case 'danger':
            bg = 'bg-red-500'
            if(!fill){
                bg =''
                outline = 'border-1 border-red-500'
                text = 'text-red-500'
            }
            break
        case 'success' :
            bg = 'bg-green-400'
            if(!fill){
                bg = ''
                outline = 'border-1 border-green-400'
                text = 'text-green-400'
            }
            break
        default :
            bg = 'bg-green-400'
            if(!fill){
                bg = ''
                outline = 'border-1 border-green-400'
                text = 'text-green-400'
            }
            break
            
        }
    if(disable){
        bg = 'bg-gray-200'
    }

    return(
        <div className={`w-full h-10 ${bg} ${outline} ${text} rounded-lg flex justify-center items-center text-white`}>
            {title}
        </div>
    )
}

export default Button