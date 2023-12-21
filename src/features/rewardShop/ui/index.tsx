import React from 'react';
import CoinIcon from "../../../assets/icons/CoinIcon";
import {useNotification} from "../../../shared/hooks/useNotification";
import {MessageOnGain} from "../../../shared/pub/NotificationMessage";
import HealthIcon from "../../../assets/icons/MemberIcons/HealthIcon";
import {useDispatch, useSelector} from "react-redux";
import {UserSelectors} from "../../../entities/user/model/selectors";
import {UserActions} from "../../../entities/user/model/actions";
import {ThingsCategoryEnum} from "../model/config";

interface IBuyRewardItemBox {
	price: number;
	name: string;
	category: string;
	img: string;
}

export const BuyRewardItemBox: React.FC<IBuyRewardItemBox> = ({
	                                                              price,
	                                                              name,
	                                                              category,
	                                                              img,
                                                              }) => {
	const dispatch = useDispatch()
	const money = useSelector(UserSelectors.selectMoney);

	const {showErrorNotification, showSuccessNotification} = useNotification()

	const onClickItem = (price: number) => () => {
		if (money >= price) {
			dispatch(UserActions.minusUserMoney({money: price}))
			if (category === ThingsCategoryEnum.HEALTH_FLASK) {
				dispatch(UserActions.addUserHp({hp: 25}))
				showSuccessNotification(<MessageOnGain thing={['жизнь', 'жизни', 'жизней']} icon={<HealthIcon/>} count={25}/>)
			}
			if (category === ThingsCategoryEnum.THING) {
				dispatch(UserActions.buyThing({newThing: {category, name, price, img}}));
				showSuccessNotification(<div>Покупка успешна совершена, проверьте инвентарь</div>)
			}
		} else {
			showErrorNotification(<div>У вас не хватает монет</div>)
		}
	};

	return (
		<div onClick={onClickItem(price)} className='shop-tasks__item'>
			<div className='shop-tasks__icon'>
				<img src={img} alt={name}/>
			</div>
			<div className='shop-tasks__price'>
				<CoinIcon/>
				{price}
			</div>
		</div>
	);
};
