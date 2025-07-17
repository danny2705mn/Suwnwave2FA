const speakeasy = require('speakeasy');

export default function handler(req, res) {
  const token = speakeasy.totp({
    secret: 'VU52G3USPHZQODCL',
    encoding: 'base32'
  });
  res.status(200).json({ code: token });
}
