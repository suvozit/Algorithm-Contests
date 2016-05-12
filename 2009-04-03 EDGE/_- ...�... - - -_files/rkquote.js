function getquote() {
        quotes = new MakeArray(100);
        numquotes = 59; 

        quotes[0] = "\"Geekonix - Geeks!! EEks!!!!\""
        quotes[1] = "\"Geekonix - umop apisdn w,i aw dlaH\""
        quotes[2] = "\"Geekonix - Pretty major, always geeky.\""
        quotes[4] = "\"Just when you thought things couldn't get Geekier - Geekonix.\""
        quotes[5] = "\"Geekonix - We put the \"eek\" back in \"Geek\".\""
        quotes[6] = "\"Geekonix - If you thought our name was dumb, look at this slogan we got.\""
        quotes[7] = "\"Geekonix - If your computer could ask you for it, it would.\""
        quotes[8] = "\"Geekonix - It's like sports for geeks.\""
        quotes[9] = "\"Geekonix - Live Fast, Geek Hard\""
        quotes[10] = "\"Geekonix - Geek it 'till it MHz!\""
        quotes[11] = "\"Geekonix - Now 20% Geekier.\""
        quotes[12] = "\"Geekonix - If you wanna be tweaked you gotta get geeked. \""
        quotes[13] = "\"Geekonix - It's all Geek to me.\""
        quotes[14] = "\"Geekonix - We know you're out there, and we're coming to get you.\""
        quotes[15] = "\"Geekonix - The Few, The Proud, The Geeks. \""
        quotes[16] = "\"Geekonix - Got Geek?\""
        quotes[17] = "\"Geekonix - Viva La Geek.\""
        quotes[18] = "\"Geekonix - You want the Geek? You can't handle the Geek!\""
        quotes[19] = "\"Geekonix - Slogan? We don't need no stinking slogan.\""
        quotes[20] = "\"Geekonix - No Geek, no glory.\""
        quotes[21] = "\"Geekonix - I see geeky people.\""
        quotes[22] = "\"Geekonix- Trying to get a date since 2002.\""
        quotes[23] = "\"Geekonix - Geek your mind, the rest will follow.\""
        quotes[24] = "\"Geekonix - It's like Tweakasaurus Rex meets Geekzilla.\""
        quotes[25] = "\"Geekonix - Tweak it or the bunny gets it\""
        quotes[26] = "\"Geekonix - Drop down and tweak it!\""
        quotes[27] = "\"Geekonix - Have you hugged a Geek today? \""
        quotes[28] = "\"Geekonix - We're your CTRL+D site.. right?.. RIGHT?\""
        quotes[29] = "\"Geekonix - Don't ya wish your boyfriend was a geek like me?.\""
        quotes[30] = "\"Geekonix - What about a nice warm cup of Geek?\""
        quotes[31] = "\"Geekonix - May the nForce be with you.\""
        quotes[32] = "\"Geekonix - It's F5-ing. \""
        quotes[33] = "\"Geekonix - Geek before it was Chic. \""
        quotes[34] = "\"Geekonix - These are not the droids you are looking for.\""
        quotes[35] = "\"Warning: Use of this site may cause you to excessively PARTICIPATE and feel \"geeky\". \""
        quotes[36] = "\"Geekonix - This is the first website of the rest of your geeky lives.\""
        quotes[37] = "\"Geekonix - Because sometimes it is rocket science.\""

        quotes[38] = "\"Geekonix - Chicks just love a Geek in Uniform.\""
        quotes[39] = "\"Geekonix - Gettin' Geeky with it.\""
        quotes[40] = "\"Geekonix - Get your Geek on.\""
        quotes[41] = "\"Geekonix - Takin' names and kickin' ASCII.\""
        quotes[42] = "\"Geekonix - I know you are, but what am I?.\""
        quotes[43] = "\"Geekonix - Talk nerdy to me.\""
        quotes[44] = "\"Geekonix - Geek, I am your Father.\""
        quotes[45] = "\"Geekonix - Geek it 'till it MHz.\""
        quotes[46] = "\"Geekonix - This is my Geek. There are many like him but this one is mine.\""
        quotes[47] = "\"Geekonix - The Few, The Proud, The Geeks.\""
        quotes[48] = "\"Geekonix - You want the Geek? You can't handle the Geek! \""
        quotes[49] = "\"Geekonix - It's Geekalicious.\""

        var now = new Date()
        var sec = now.getSeconds()

        return quotes[sec % numquotes];
}

function MakeArray(n) { 
        this.length = n; 
        for (var i = 1; i <= n; i++) { 
                this[i] = 0 }
            return this 
         

}
