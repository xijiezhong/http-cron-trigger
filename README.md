# Cron Http Trigger Service

trigger a http request by cron scheduler

# 使用方法

在环境变量中配置trigger，可以定时触发http请求

# trigger schema

TRIGGER_$n: "$cron | $url | $method"

default method: get

# example

TRIGGER_1: "0 0 1 * * * | http://www.google.com | get"