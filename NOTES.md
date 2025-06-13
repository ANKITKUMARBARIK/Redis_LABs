docker run -d --name redis-stack --restart always -p 6379:6379 -p 8001:8001 redis/redis-stack:latest

GUI -> http://localhost:8001/

<!-- docker exec -it REDIS_CONTAINER_ID bash -->
docker exec -it 620cadfdfd91 bash

redis-cli ping

redis-cli

<!-- now u connected with redis CLI server -->

-------------------------------------------------------------------------------------->

<!-- Now listen,...another time run this cmd, if u have to re-open the Redis CLI:-

access Redis CLI server: docker exec -it redis-stack redis-cli

for GUI: http://localhost:8001/


Redis CLI Playground--------------practice----------------->

<!-- ALL ABOUT STRINGs ----------------------------------->

set msg "admin"
get msg
del msg  <!-- delete key:value -->
exists msg  <!-- check key exists or not -->
keys *  <!-- check how many keys u have -->
flushall  <!-- delete all keys:values -->
exists *  <!-- check all keys exists or not -->

<!--but better way to provide key:value -->
set msg:1 "hello"  <!-- key>>  msg:1  value>>  "hello" -->
set msg:2 "hello"

get msg:1
get msg:2
set msg:1 "morning"  <!-- we can update exists value -->
get msg:1

set comment:1 "fire" nx  <!-- set value, if key doesn't exists..otherwise null -->
set comment:1 "something_fire" nx <!-- nil -->
get comment:1

set like:1 "fantastic" xx  <!-- set/update value, if key exist's.. otherwise nil -->
set like:1 "fantastic"
set like:1 "wrong way" xx
get like:1

mget msg:1 msg:2 comment:1 like:1  <!-- get multple values -->

mset watch:1 "high" watch:2 "quality" watch:3 "videos" <!-- set multiple values -->
get watch:2
mget watch:1 watch:2 watch:3

set count "0"
incr count  <!-- count increment++  -->
get count
incrby count "10"  <!-- count increment by 10  -->
get count

expire msg 20  <!-- set a 20-second expiry for the key, it will auto-delete -->
ttl msg  <!-- check expire time - key  -->
get msg

setex social 20 "TwitX"  <!-- set key:value with expiry time - 20sec -->
ttl social
get social

<!-- ALL ABOUT LISTs ----------------------------------->

<!-- LPUSH adds a new element to the head of a list; RPUSH adds to the tail. -->
lpush fruits:arr "apple" <!-- key>> fruits:arr  value>> "apple" -->
lpush fruits:arr "cherry"
lpush fruits:arr "mango"
lpush fruits:arr "orange"
lpush fruits:arr "watermelon"
rpush fruits:arr "grapes"
rpush fruits:arr "guava"

rpush fruits:arr "papaya" "ginger" "potato" "pumpkin" <!-- adds multiple element to the tail -->
lpush fruits:arr "pineapple" "cornflower" <!-- adds multiple element to the head -->

<!-- LRANGE extracts a range of elements from a list. -->
lrange fruits:arr 0 -1  <!-- 0: start index  -1: end all elements -->
lrange fruits:arr 0 3  <!-- 0: start index  3: end index -->

<!-- LPOP removes and returns an element from the head of a list; RPOP does the same but from the tails of a list. -->
lpop fruits:arr
rpop fruits:arr
lrange fruits:arr 0 -1

<!-- BLPOP removes and returns an element from the head of a list. If the list is empty, the command blocks until an element becomes available or until the specified timeout is reached. -->
lpush fruiting:arr "bakery" "store"
blpop fruiting:arr 20
<!-- now suddenly push one element using GUI within 20sec:
lpush fruiting:arr "grocery"
-->

<!-- LLEN returns the length of a list. -->
llen fruits:arr

<!-- ALL ABOUT SETs ----------------------------------->

<!-- SADD adds a new member to a set. -->
sadd mobiles:tech "oneplus"
sadd mobiles:tech "samsung"
sadd mobiles:tech "nothing"

sadd mobiles:tech "vivo" "oppo" "nokia"  <!--adds multiple member to a set-->

<!-- SMEMBERS extracts a members from a set. -->
smembers mobiles:tech

<!-- SREM removes the specified member from the set. -->
srem mobiles:tech "oppo"
smembers mobiles:tech

<!-- SISMEMBER tests a string for set membership. -->
sismember mobiles:tech "vivo"

<!-- SCARD returns the size (a.k.a. cardinality) of a set. -->
scard mobiles:tech

<!-- ALL ABOUT HASHEs ----------------------------------->

<!-- HSET: sets the value of one or more fields on a hash. -->
hset person:obj "name" "admin" "age" 19 "course" "BCA"  <!-- key>> person:obj  value>> "name" "admin" "age" 19 course "BCA" -->

<!-- HGET: returns the value at a given field. -->
hget person:obj "course"

<!-- HGETALL: returns all fields -->
hgetall person:obj

<!-- HDEL: delete specified field from the hash -->
hdel person:obj "age"

<!-- HEXISTS: check specified field exists or not  -->
hexists person:obj "age"

<!-- ALL ABOUT SORTED SETs ----------------------------------->

<!-- ZADD: adds a member to a Sorted Set in Redis. -->
zadd results:score 10 "john"  <!-- 10 is the score associated with the member, "john" is the member name (value) you're adding. -->
zadd results:score 6 "sam"
zadd results:score 14 "wick"
<!-- associated score with multiple members -->
zadd results:score 8 "Sam-Bodden" 5 "Royce" 2 "Ford" 1 "Prickett"

<!-- ZRANGE extracts a range of members ,order is low to high from a sorted set-->
zrange results:score 0 -1

<!-- ZREVRANGE: extracts a range of members ,order is high to low from a sorted set-->
zrevrange results:score 0 -1

<!-- ZREM: To remove an element -->
zrem results:score "Royce"
zrange results:score 0 -1

<!-- ZRANK: get rank/position, considering elements of sorted sets in ascending order -->
zrank results:score "Ford"

<!-- ZREVRANK: get rank/position, considering elements of sorted sets in descending order -->
zrevrank results:score "Ford"
