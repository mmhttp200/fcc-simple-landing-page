/**
 * @desc Render content according to the User-Agent
 * @param {object} req 
 * @param {object} res 
 * @param {object} next 
 */
function userAgentHandler(req, res, next){

    const userAgentString = req.headers['user-agent']

    switch(userAgentString){
        case 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)':
        case 'Mozilla/5.0 (compatible; Bingbot/2.0; +http://www.bing.com/bingbot.htm)':
        case 'Mozilla/5.0 (compatible; Yahoo! Slurp; http://help.yahoo.com/help/us/ysearch/slurp)':
        case 'DuckDuckBot/1.0; (+http://duckduckgo.com/duckduckbot.html)':
        case 'Mozilla/5.0 (compatible; Baiduspider/2.0; +http://www.baidu.com/search/spider.html)':
        case 'Mozilla/5.0 (compatible; YandexBot/3.0; +http://yandex.com/bots)':
        case 'facebot':
        case 'facebookexternalhit/1.0 (+http://www.facebook.com/externalhit_uatext.php)':
        case 'facebookexternalhit/1.1 (+http://www.facebook.com/externalhit_uatext.php)':
        case 'facebookexternalhit/1.1':
        case 'ia_archiver (+http://www.alexa.com/site/help/webmasters; crawler@alexa.com)':
            return res.status(200).render('index_alt')
        default:
            return next()
    }

}


module.exports = userAgentHandler