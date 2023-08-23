# my_first_bug
This is a POC of the first bug I ever discovered on a VDP

## How to deploy

**Make sure you have the Docker service running**

```
git clone https://github.com/asempire/my_first_bug.git
cd my_first_bug
sudo docker build -t poc-test-image . --no-cache
sudo docker run -p 3000:3000 poc-test-image
```

## How to terminate the docker image process
```
sudo docker ps # Then check the docker image random alias that should be at the end
sudo docker kill <The alias you got previously> 
```