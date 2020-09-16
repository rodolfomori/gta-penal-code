import styled from 'styled-components';

export const Container = styled.div`
  
`;

export const MainData = styled.div`
`;

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 20px;
    margin-left:40px;
    display:${props => !props.show && 'none'}
    span{
        font-weight:bold;
    }
`;

export const InputSearchData = styled.input`
`;
