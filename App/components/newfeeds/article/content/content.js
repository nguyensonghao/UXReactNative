import React, { Component } from 'react';
import { View, Text, Image, Dimensions } from 'react-native';

import { style } from './content.style';

export default class Content extends Component {
    render() {
        const dimensions = Dimensions.get('window');
        const imageHeight = Math.round(dimensions.width * 9 / 16);
        const imageWidth = dimensions.width - 26;

        return (
            <View style={style.content}>
                <View style={style.textContainer}>
                    <Text style={style.text}>
                        Sau chiến tích ĐT Việt Nam vào đến chung kết King's Cup 2019 trên đất Thái và thăng tiến đáng kể trên BXH FIFA để chiếm lợi thế với việc nằm trong nhóm hạt giống thứ 2 khu vực châu Á ở lễ bốc thăm vòng loại World Cup 2022 sắp diễn ra, VFF đang tích cực đẩy mạnh việc đàm phán gia hạn hợp đồng với HLV Park Hang Seo.
                        Đây là động thái rất cần thiết và phải làm rốt ráo khi hợp đồng hiện tại của đôi bên sẽ mãn hạn vào tháng 1 năm sau - thời điểm mà đội U23 Việt Nam của nhà cầm quân 60 tuổi người Hàn Quốc này đang bận túi bụi với việc dự VCK U23 châu Á 2020 cũng diễn ra tại xứ sở Chùa Vàng.
                    </Text>
                </View>
                <View style={style.imageContainer}>
                    <Image
                        style={{ height: imageHeight, width: imageWidth }}
                        source={require('../../../../assets/images/newfeeds.jpg')}
                    />
                </View>
            </View>
        )
    }
}
