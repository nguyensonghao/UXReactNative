import { layout } from '../../../../utils/themes';

export const style = {
    container: {
        ...layout.center,
        // backgroundColor: '#0000004d',
        // borderColor: '#000000cc',
        // borderWidth: 0.5,
        width: '80%',
        marginLeft: '10%',
        marginTop: 40,
        borderRadius: 4,
        paddingTop: 30,
        paddingBottom: 30
    },

    containerToolbar: {
        ...layout.center,
        flexDirection: 'row',
    },

    btnToolbar: {
        ...layout.center,
        width: 48,
        height: 48,
        backgroundColor: 'rgba(0, 0, 0, 0.12)',
        borderRadius: 24,
        margin: 6
    },

    infoContainer: {
        ...layout.center,
        alignItems: 'center'
    },

    name: {
        color: 'white',
        fontSize: 18,
        fontWeight: '400'
    },

    dvdImage: {
        width: 72,
        height: 72,
        marginTop: 20,
        marginBottom: 20
    },

    rotateBox: {
        width: 72,
        height: 72
    }

}