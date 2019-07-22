import { layout } from '../../../utils/themes';

export const style = {
    container: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#eeeeee',
        padding: 10,
        alignItems: 'center'
    },

    avatar: {
        width: 64,
        height: 64,
        borderRadius: 32,
        marginRight: 10
    },

    information: {
    },

    username: {
        color: 'black',
        fontSize: 16
    },

    btnLogout: {
        ...layout.center,
        marginTop: 8,
        backgroundColor: '#eeeeee',
        height: 28,
        width: 80,
        borderRadius: 4
    }
}