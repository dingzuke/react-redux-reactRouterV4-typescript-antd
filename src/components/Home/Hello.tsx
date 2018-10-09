import * as React from 'react';
import { Button, Icon } from 'antd';
const css = require('./Hello.scss');
// 绑定redux 在组件上
import { actions, connect } from 'myRedux';
import StoreState from 'myRedux/storeState';
import { Dispatch } from 'react-redux';

export const mapStateToProps = ({ enthusiasmLevel, languageName }: StoreState): Props => ({
    enthusiasmLevel,
    languageName,
});

export const mapDispatchToProps = (dispatch: Dispatch<string>) => {
    return {
        onIncrement: () => dispatch(actions.incrementEnthusiasm()),
        onDecrement: () => dispatch(actions.decrementEnthusiasm()),
    };
};
//
export interface Props {
    languageName?: string;
    enthusiasmLevel?: number;
    onIncrement?: () => void;
    onDecrement?: () => void;
}

@connect(mapStateToProps, mapDispatchToProps)
export default class Hello extends React.Component<Props, object> {

    constructor(props: Props) {
        super(props);
    }
    
    render() {
        const { languageName, enthusiasmLevel = 1, onDecrement, onIncrement } = this.props;

        if (enthusiasmLevel <= 0) {
            throw new Error('You could be a little more enthusiastic. :D');
        }

        return (
            <div className="hello">
                <div >
                    {languageName} 
                    <span className={css.greeting}>
                        {this.getExclamationMarks(enthusiasmLevel)}
                    </span>
                </div>
                <Button type="primary" onClick={onDecrement}>-</Button>
                &nbsp;
                <Button type="primary" onClick={onIncrement}>+</Button>
            </div>
        );
    }
    private getExclamationMarks = (numChars: number) => {
        let arr = [];
        for (let index = 0; index < numChars; index++) {
            arr.push( <Icon type="heart" key={index} />);
        }
        return arr;
    }
}