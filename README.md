* install docker/docker-compose

    docker-compose up -d
    #get ip address
    #http://stackoverflow.com/a/40573218/3232611
    for s in `docker-compose ps -q`; do echo ip of `docker inspect -f "{{.Name}}" $s` is `docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' $s`; done    
    nslookup  yourappdomain.com  container_ip
    
