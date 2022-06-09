export const idlFactory = ({ IDL }) => {
  const NFT = IDL.Service({});
  return NFT;
};
export const init = ({ IDL }) => {
  return [IDL.Text, IDL.Principal, IDL.Vec(IDL.Nat8)];
};
