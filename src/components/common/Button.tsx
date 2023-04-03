import styled from 'styled-components';

const StyledButton = styled.div<{ width: string, height: string }>`
    width: ${(props: any)=> [props.width]};
    height: ${(props: any)=> [props.height]};
    background-color: #50B2DD;
    color: #fff;
    cursor: pointer;
    padding: 2px;
    text-align: center;
    line-height: ${(props: any)=> [props.height]};
    margin: 5px;
    border-radius: 10px;
    font-size: 26px;
`

export enum ButtonTypes {
    default = 'DEFAULT'
}

interface ButtonProps {
    type: ButtonTypes;
    height?: string;
    width?: string;
    handleClick: any;
    children?: any;

}

const Button = (props: ButtonProps) => {
    const  {height = '50px', width = 'auto',  type = ButtonTypes.default, handleClick} = props;

    const onClick = () => {
        handleClick?.();
    }
    return (
        <StyledButton height={height} width={width} onClick={onClick} >{props.children}</StyledButton>
    )
}

export default Button;