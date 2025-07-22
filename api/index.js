const url = require('url');
const querystring = require('querystring');
const speakeasy = require('speakeasy');

export default function handler(req, res) {
  const otpauthUrl = 'otpauth://totp/sunwave:aaron@therosemountgroup.com?secret=VU52G3USPHZQODCL&issuer=sunwave';
  const parsedUrl = url.parse(otpauthUrl);
  const queryParams = querystring.parse(parsedUrl.query);

  const secret = 'TSLKVDYN2R4GEU2B';

  const token = speakeasy.totp({
    secret: secret,
    encoding: 'base32'
  });

  res.status(200).json({ code: token });
}
