echo -e "---------docker Login--------"
docker login --username=nongyehong registry.cn-hongkong.aliyuncs.com --password=k2439646234
echo -e "---------docker Stop--------"
docker stop hula-web
echo -e "---------docker Rm--------"
docker rm hula-web
docker rmi registry.cn-hongkong.aliyuncs.com/nongyehong/hula-web:latest
echo -e "---------docker Pull--------"
docker pull registry.cn-hongkong.aliyuncs.com/nongyehong/hula-web:latest
echo -e "---------docker Create and Start--------"
docker run --rm -d -p 13000:3000 --name hula-web registry.cn-hongkong.aliyuncs.com/nongyehong/hula-web:latest
echo -e "---------deploy Success--------"