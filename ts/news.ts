import {ellipsizeTextBox} from "./helpers/helper";
import * as $ from "jquery";

export class News {
    constructor() {
        this.threeDots();
        this.eventListeners()
        this.loading()
    }


    ajax() {
        let pageIndex = 0

        if ($(window).scrollTop() ===
            $(document).height() - $(window).height()) {
            GetData();
        }

        $(window).scroll(function () {
            console.log(12)
            if ($(window).scrollTop() ===
                $(document).height() - $(window).height()) {
                GetData();
            }
        });

        function GetData() {
            $.ajax({
                type: 'Post',
                url: 'http://drada.ge/Home/GetNewses',
                data: {"index": pageIndex},
                dataType: 'json',
                success: function (data) {
                    if (data != null) {
                        for (var i = 0; i < data.length; i++) {
                            $("#newsContainser").append(
                                "<div class=\"subNews\">" +
                                "<div class=\"iterator\">0</div>" +
                                "<a>" +
                                "<div class=\"date\">" +
                                "<div class=\"line\"></div>" +
                                "<div class=\"dateText\">" + data[i].CreateDate + "</div>" +
                                "</div>" +
                                "<div class=\"postContainer\">" +
                                "<div class=\"img\"><img src=\"\"></div>" +
                                "<div class=\"description\" data-link=\"someting\">" +
                                "<h2>" + data[i].Name + "</h2>" +
                                "<p class=\"newsDescription\" data-text=\"" + data[i].Description + "\"></p>" +
                                "</div>" +
                                "</div>" +
                                "</a>" +
                                "</div>"
                            );
                        }
                        pageIndex++;
                    }

                    $('.newsDescription').each((i, el) => {
                        const element = $(el)
                        const elementText = element.data('text');
                        ellipsizeTextBox(element, elementText, 230, false);
                    })

                    $('.readMore').on('click', function (event) {
                        const element = $(event.target).parent()
                        const elementText = element.data('text');
                        element.html(elementText)
                    })
                },
                beforeSend: function () {
                    $("#progress").show();
                },
                complete: function () {
                    $("#progress").hide();
                },
                error: function (err) {
                    alert("Error while retrieving data!");
                }
            });
        }
    }

    loading() {
        $('.loader').addClass('loader-done')
    }

    threeDots() {
        $('.newsDescription').each((i, el) => {
            const element = $(el)
            const elementText = element.data('text');
            ellipsizeTextBox(element, elementText, 230, false);
        })
    }

    private eventListeners() {
        $('.readMore').on('click', function (event) {
            const element = $(event.target).parent()
            const elementText = element.data('text');
            element.html(elementText)
        })
    }
}


