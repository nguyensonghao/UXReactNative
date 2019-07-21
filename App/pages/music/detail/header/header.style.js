import { layout } from '../../../../utils/themes';

export const style = {
    container: {
        height: 56,
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingTop: 6,
        paddingLeft: 12,
        paddingRight: 12
    },

    btn: {
        ...layout.center,
        width: 44,
        height: 44,
        borderRadius: 22,
        backgroundColor: 'rgba(0, 0, 0, 0.12)'
    }
}