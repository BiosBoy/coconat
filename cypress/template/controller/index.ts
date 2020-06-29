// import getResponseData from '../../../utils/getResponseData';
// import getRequestData, { TFormData } from '../../../utils/getRequestData'

// export const onInit = () => {
//   cy.wait('@init').then(
//     () => cy.log('**INIT IS FIRED**.')
//   );
// }

// export const onStart = () => {
//   triggers.start().wait('@action')
//     .then(response => {
//       const { body } = response.request;
//       const requestData = getRequestData(body as TFormData);

//       expect(requestData).to.deep.equal(startFightData)
//       cy.log('**ATTACK STARTED. REQUEST PAYLOAD IS OK!**')
//     });
// }
