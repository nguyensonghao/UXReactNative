import { form, color, layout } from '../../../utils/themes';

export const style = {
    container: {
        backgroundColor: 'white',
        flex: 1,
        padding: 40
    },

    logoContainer: {
        ...layout.center,
        marginBottom: 30
    },

    logo: {
        width: 120,
        height: 120
    },

    inputContainer: {
        marginBottom: 20
    },

    input: {
        ...form.input,
        height: 46,
        padding: 10
    },

    btnLogin: {
        ...layout.center,
        backgroundColor: color.primary,
        height: 46,
        borderRadius: 23
    },

    btnText: {
        color: 'white'
    },

    registerContainer: {
        ...layout.center,
        marginTop: 15,
        flexDirection: 'row'
    },

    btnRegister: {
        marginLeft: 6
    },

    registerText: {
        color: color.link
    }
}