import { layout } from '../../../utils/themes';

export const style = {
    container: {
        flex: 1
    },

    info: {
        ...layout.center,
        alignItems: 'center',
        marginTop: 60
    },

    name: {
        color: 'white',
        fontSize: 18,
        fontWeight: '500'
    },

    footer: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0
    }
}