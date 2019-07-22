export const getMessageError = (message) => {
    switch (message) {
        case 'The email address is already in use by another account.':
            return 'Địa chỉ email đã tồn tại';
        case 'Password should be at least 6 characters.':
            return 'Mật khẩu phải có ít nhất 6 ký tự';
        default:
            return message;
    }        
}