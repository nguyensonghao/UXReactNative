const color = {
    primary: '#4080ff',
    background: '#e9ebee',
    borderColor: '#eff0f1',
    link: '#0477ca'
}

const form = {
    input: {
        height: 40, 
        borderColor: color.borderColor, 
        borderWidth: 1,
        padding: 6
    }
}

const layout = {
    center: {
        alignItems: 'center',
        justifyContent: 'center'
    }
}

const drawer = {
    drawer: {
        backgroundColor: 'white',
        shadowColor: '#000000', 
        shadowOpacity: 0.8, 
        shadowRadius: 3,
        borderRightWidth: 1,
        borderRightColor: '#eeeeee'
    },
    main: {
        backgroundColor: 'black',
    }
}

export { color, form, layout, drawer }