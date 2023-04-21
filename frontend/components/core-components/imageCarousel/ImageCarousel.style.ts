import styled from "@emotion/styled";

const SelectImage = styled.div`
width: 100%;
height: 100%;
max-width: fit-content;
overflow-x: auto;
display: flex;
flex-direction: row;
align-items: center;
max-width: fit-content;
gap:  var(--spacing-2);
margin-top: var(--spacing-2);
`
const SelectedImage = styled.div`
  width: 100%;
  height: 100%;
  max-height: 17.6rem;
  border-radius: var(--spacing-2);
  padding-bottom: var(--spacing-2);
img{
    width: 100%;
 height: 100%;
 max-height: 17.6rem;
 border-radius: var(--spacing-2);
}
`
const ImagePreview = styled.div`
  width: 100%;
  height: 100%;
  max-height: 7.5rem;
  border-radius: var(--spacing-2);

img{
    width: 100%;
 height: 100%;
 max-height: 7.5rem;
 min-width: 11.25rem;
 border-radius: var(--spacing-2);
 }
`

export {SelectImage,SelectedImage,ImagePreview}