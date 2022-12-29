intent('$(item* (.*))', (p) => {
    p.item.value = p.item.value.toLowerCase();
    if(p.item.value === 'general' || p.item.value === 'health' || p.item.value === 'sports' || p.item.value === 'business') {
        p.play({ command:'VoiceNews',data:p.item.value });
        p.play(`Fetching News on ${p.item.value} Category`);
    }
    else {
        p.play('Please speak a valid category');
    }
})