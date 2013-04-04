Ext.define('VdoTest.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                title: 'Welcome',
                iconCls: 'home',

                styleHtmlContent: true,
                scrollable: true,

                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'IndiaCan Video App'
                },

                html: [
                    "In order to play videos on your phone, make sure your phone supports streaming. For HTML5-compliant touch screen devices, follow the steps below:",
                    "<br><br><br><br><br>1. Touch any video thumbnail to open up the video watch screen.",
                    "<br>2. Press the play button on the video to start playing it. The video will automatically load in full screen portrait view.",
					"<br>3. Rotate the phone to watch the video in full screen landscape mode."
                ].join("")
            },
            {
                title: 'Video 1',
                iconCls: 'action',

                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Video 1'
                    },
                    {
                        xtype: 'video',
                        url: 'http://blog.indiacan.com/movie1.mp4',
                        posterUrl: '../VdoTest/app/view/movie1.jpg'
						
                    }
                ]
            },
			{
                title: 'Video 2',
                iconCls: 'action',

                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Video 2'
                    },
                    {
                        xtype: 'video',
                        url: '../VdoTest/app/view/movie2.mp4',
                        posterUrl: '../VdoTest/app/view/movie2.jpg'
                    }
                ]
            }
			
			
        ]
    }
});
