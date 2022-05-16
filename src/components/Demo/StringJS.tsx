import { useAppSelector } from '../../app/hooks';
import style from './Demo.module.scss';
import { selectDemo } from '../../app/demoSlice';
import { Highlighted, Strong, SubTitleUpperDark, SectionTitle } from '../common/Typography';
import { stringHandle } from '../../app/dataJS';
import { useState } from 'react';
import { InputNumber, InputText } from '../common/Input';

const StringJS = () => {
	const activeStyle = useAppSelector(selectDemo);
	const activeDemoStatus = activeStyle.part1.stringFeatures;
	const method = activeDemoStatus.name;
	const id = activeDemoStatus.id;
	const description = activeDemoStatus.description;

	const [start, setStart] = useState<number | null>(null);
	const [end, setEnd] = useState<number | null>(null);
	const [subStr, setSubStr] = useState('');

	const initString = ` start AnYLetteRS end `;

	let startDescription, resultDescription;
	if (id === 6) startDescription = 'set char position';
	if (id === 7) {
		startDescription = 'set repeat qty';
	} else {
		startDescription = 'set start position ';
	}
	let endDescription = (id === 11) ? 'set length ' : 'set end position ';

	const result = stringHandle(initString, method, start, end, subStr);
	if (id === 4 || id === 5 || id === 8) {
		resultDescription = result?.toString();
	} else {
		resultDescription = result;
	}
	return (
		<section className={"demo"}>
			<SectionTitle>String methods</SectionTitle>
			<header className={style.demo__description}>
				<Highlighted><Strong>method: </Strong>{method}</Highlighted>
				<Highlighted><Strong>description: </Strong>{description}</Highlighted>
			</header>
			<div className={style.demo__container__sticked}>
				<fieldset className={style.demo__settings}>
					<legend><Strong>Settings</Strong></legend>
					{(id >= 5) &&
						<>
							<label htmlFor="start"><Strong>{startDescription}</Strong></label>
							<InputNumber min="0" max="19" value={start} name="start"
								onChange={(e: React.ChangeEvent<HTMLInputElement>) => setStart(Number(e.target.value))} />
						</>}
					{(id >= 10) &&
						<>
							<label htmlFor="end"><Strong>{endDescription}</Strong></label>
							<InputNumber min="0" max="19" value={end} name="end"
								onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEnd(Number(e.target.value))} />
						</>}
					{(id === 8 || id === 9) &&
						<>
							<label htmlFor="subStr"><Strong>substring</Strong></label>
							<InputText maxLength="9" value={subStr} name="subStr"
								onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSubStr(e.target.value)} />
						</>}
				</fieldset>
				<div className={style.demo__parent}>
					<SubTitleUpperDark>initial state</SubTitleUpperDark>
					<div className={style.demo__child__array}>{initString}</div>
				</div>
				<div className={style.demo__parent}>
					<SubTitleUpperDark>result</SubTitleUpperDark>
					<div className={style.demo__child__array}>{resultDescription}</div>
				</div>
			</div>
		</section>
	)
}

export default StringJS;