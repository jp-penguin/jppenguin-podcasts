docker build . -t jppenguin-podcasts

docker save jppenguin-podcasts -o .\jppenguin-podcasts

scp jppenguin-podcasts jared@192.168.1.150:/home/jared/v3
# scp scriptures.tar.gz jared@192.168.1.150:/home/jared/v3


ssh -t jared@192.168.1.150 'docker load -i /home/jared/v3/jppenguin-podcasts'

ssh -t jared@192.168.1.150 'docker kill jppenguin-podcasts'

ssh -t jared@192.168.1.150 'docker run -d -e "VIRTUAL_HOST=podcasts.parkinson.im" -e "LETSENCRYPT_HOST=podcasts.parkinson.im" -e "LETSENCRYPT_EMAIL=jared@parkinson.im" -p 13000 -it --rm --name jppenguin-podcasts jppenguin-podcasts'



yarn run electron:windows:beta





